import React, { useState, useEffect } from 'react'
import { useMutation } from 'urql'
import { createTagMutation } from 'api'
import Select from 'react-select/creatable'

export default ({ tags, onChange, value = [] }) => {
  const [options, setOptions] = useState(
    tags.map((tag) => ({ value: tag.id, label: tag.label })),
  )

  const handleChange = (newValue, actionMeta) => {
    onChange(newValue)
  }

  useEffect(() => {
    setOptions(tags.map((tag) => ({ value: tag.id, label: tag.label })))
  }, [tags])

  const [, createTag] = useMutation(createTagMutation)

  return (
    <div class="block block06 add-series-tags">
      <h3 class="title size04">Tags (Optional)</h3>

      <Select
        isMulti
        name="colors"
        options={options}
        onChange={handleChange}
        value={value}
        onCreateOption={(label) =>
          createTag({ label }).then(
            ({ data: { createOneTag: tag = {} } = {} }) => {
              onChange([...value, { value: tag.id, label: tag.label }])
            },
          )
        }
        placeholder="Select tags"
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            // primary25: 'hotpink',
            primary: 'black',
          },
          spacing: {
            ...theme.spacing,
            controlHeight: 47,
            // menuGutter: 40,
            // baseUnit: 2,
          },
        })}
      />
      <div class="select-text">Each book is limited to 25 tags.</div>
    </div>
  )
}
