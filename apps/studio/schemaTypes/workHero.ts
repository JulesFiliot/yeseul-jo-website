import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workHero',
  title: 'Work Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
      description: 'Text displayed at the top of the work page',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heroText',
    },
  },
})
