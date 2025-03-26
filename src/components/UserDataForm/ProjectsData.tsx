import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from "react-redux"
import {
  updateUserData,
  nextStep,
  prevStep,
} from "@/utils/slices/userDataSlice"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ProjectsInfoData, projectsInfoSchema } from "@/lib/userDataTypes"
import { RootState } from "@/utils/store"
import { Plus, Trash2 } from "lucide-react"
import React from "react"
import TiptapEditor from "./TiptapEditor"
import { Input } from "../ui/input"

export default function ExperienceData() {
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.userData.data)
  const form = useForm<ProjectsInfoData>({
    resolver: zodResolver(projectsInfoSchema),
    defaultValues: {
      projects: userData.projects,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  })

  const updateField = (field: Partial<ProjectsInfoData>) => {
    dispatch(updateUserData(field))
  }

  const onSubmit = (data: ProjectsInfoData) => {
    dispatch(updateUserData(data))
    console.log("dataa: ", data)
    dispatch(nextStep())
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            {index > 0 && (
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    remove(index)
                    updateField({
                      projects: [
                        ...userData.projects.slice(0, index),
                        ...userData.projects.slice(index + 1),
                      ],
                    })
                  }}
                  className="text-blue-600 hover:text-blue-800 hover:cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
            <FormField
              control={form.control}
              name={`projects.${index}.title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senior Front End Engineer"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        updateField({
                          projects: [
                            ...userData.projects.slice(0, index),
                            {
                              ...userData.projects[index],
                              title: e.target.value,
                            },
                            ...userData.projects.slice(index + 1),
                          ],
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`projects.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <TiptapEditor
                      value={field.value}
                      placeholder="Write a professional summary about yourself in more than 100 words"
                      onChange={(newContent) => {
                        field.onChange(newContent)
                        updateField({
                          projects: [
                            ...userData.projects.slice(0, index),
                            {
                              ...userData.projects[index],
                              description: newContent,
                            },
                            ...userData.projects.slice(index + 1),
                          ],
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 mx-2"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 mx-2"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300 mx-2"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </React.Fragment>
        ))}

        <div className="flex justify-center">
          {fields.length < 4 ? (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  title: "",
                  description: "",
                })
              }
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Another Project
            </Button>
          ) : (
            <p className="text-sm text-gray-500 italic">
              Maximum of 4 projects allowed
            </p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => dispatch(prevStep())}
          >
            Previous
          </Button>
          <Button type="submit" className="w-full">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
