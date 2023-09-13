import React from "react";

import {
  Container,
  Title,
  Category,
  Amaount,
  CategoryName,
  Icon,
  Date,
  Footer,

} from './styles'

interface Category {
 
  name: string,
  icon:string,

}

export interface TransactionsCardProps{
 data: { 
  type: 'positive'| 'negative',
  title: string;
  amount: string;
  category: Category;
  date: string;
 }
}

interface Props {
  data: TransactionsCardProps;
}

export function TransactionCard({data}:Props){
  return(
    <Container>
      <Title> {data.title}</Title>
      <Amaount type={data.type}> 
      {
        data.type === 'negative'&& '- ' }
        {data.amount}
      
      </Amaount>
      <Footer>
        <Category>
          <Icon name= {data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}