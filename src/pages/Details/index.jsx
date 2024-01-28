import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText' 
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officia aliquid vitae ut architecto, perferendis dignissimos nobis fugit veniam accusamus iste. Quia, cumque soluta molestiae obcaecati ad veniam fugit eum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia animi possimus quo atque impedit consectetur tenetur similique molestias aliquid labore necessitatibus, explicabo maxime vero at cumque voluptatum illo nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias accusantium ad nemo saepe! Fuga reprehenderit perferendis commodi, quasi ducimus natus, neque accusamus nesciunt repudiandae cupiditate quod alias deleniti, velit beatae.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}