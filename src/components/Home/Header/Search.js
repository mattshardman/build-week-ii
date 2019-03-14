import React from 'react';
import styled from 'styled-components'; 

const Form = styled.form`
  width: ${({focused}) => focused ? '400px' : '200px'};
  border: ${({focused}) => focused ? '1px #ff0080 solid' : '1px solid #eaeaea'};
  height: 35px;
  transition: width 200ms, border 1s;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Input = styled.input`
  height: 100%;
  width: 90%;
  border: none;
  background: transparent;
  outline: none;
`;

function Search({ field, setField, search, focused, setFocused }) {
    return ( <Form 
        onSubmit={e => {
          e.preventDefault();
          search(field);
        }}
        focused={focused}
      >
        <Input
          type="text"
          placeholder="Search here..."
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setField('');
          }}
          value={field}
          onChange={e => setField(e.target.value)}
        />
        <i className="material-icons" style={{ fontSize: 14 }}>search</i>
      </Form>)
}

export default Search;
