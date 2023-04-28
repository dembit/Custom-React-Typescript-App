import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { graphql } from '../../gql'
import { useQuery } from '@apollo/client'

const allFilms = graphql(`
  query Relations {
    applicantIndividualCompanyPositions {
      data {
        id
      }
    }
  }
`)

const array = ['Apple', 'dd1', 'dd2', 'sd']

const Select = () => {
  const { data } = useQuery(allFilms)
  console.log(data)
  return (
    <div>
      <Autocomplete
        options={array}
        renderInput={params => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      />
    </div>
  )
}

export default Select
