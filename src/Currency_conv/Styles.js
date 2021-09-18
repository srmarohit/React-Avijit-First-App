import styled from 'styled-components'


export const Container = styled.div`
background-color : blue;
width : 100vw;
height:100vh;
position: relative;
`

export const CurrencyBox = styled.div`
width : 400px;
height:500px;
border-radius:15px;
position: absolute;
top:50%;
left:50%;
transform : translate(-50%, -50%) ;
`

export const Amount = styled.div`

input{
    border-radius:5px;
    height:2.6rem;

    &:focus{
        font-weight: 800;
    }
  
}

`

export const CurrencyChanger = styled.div``

export const From = styled.div`

select{
    width : 6rem;
    height: 2.6rem;
    background:white;
    border:none;
    border-radius:5px;
}
`

export const To = styled.div`

select{
    width : 6rem;
    height: 2.6rem;
    background:white;
    border:none;
    border-radius:5px;
}
`

export const Icon = styled.div``

export const Output = styled.div``

export const Calculate = styled.button``


