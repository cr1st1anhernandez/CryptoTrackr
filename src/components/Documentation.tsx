import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react'

const DocumentationSection = () => {
  return (
    <section id="documentation">
      <Card className="p-4">
        <CardHeader>
          <h2>Documentation</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <h4 className="text-blue-600">Frontend (React)</h4>
              <ul>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>React Router: For navigation within the application.</li>
                <li>Axios: Library for making HTTP requests.</li>
              </ul>
            </li>
            <li>
              <h4 className="text-blue-600">Backend (Spring Boot)</h4>
              <ul>
                <li>
                  Spring Boot: Java framework for building Java-based
                  applications.
                </li>
                <li>Spring Web: For handling HTTP requests.</li>
                <li>Jackson Databind: Library for processing JSON data.</li>
              </ul>
            </li>
          </ul>
          <h3>Project Structure</h3>
          <ul>
            <li>
              <strong className="text-blue-600">frontend: </strong>Contains the
              frontend code built with React.
            </li>
            <li>
              <strong className="text-blue-600">backend: </strong>Contains the
              backend code built with Spring Boot.
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/cr1st1anhernandez/nucleus-chat-frontend"
            className="font-bold"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </section>
  )
}

export default DocumentationSection
