import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

const WordSelector = ({addWord, deleteWord, selectedWords}) => {
    return (
        <ReactTags
          tags={selectedWords}
          handleDelete={deleteWord}
          handleAddition={addWord}
          inputFieldPosition="bottom"
          autocomplete
          editable
        />
    )
}

export default WordSelector