import { Accordion, AccordionItem } from '@nextui-org/react'

export default function Faqs() {
  const questions = [
    {
      title: 'What is Bitcoin?',
      content:
        'Bitcoin is a decentralized cryptocurrency invented in 2008 by an unknown person or group using the pseudonym Satoshi Nakamoto. It started being used in 2009 when its implementation was released as open-source software. Bitcoin relies on blockchain technology to manage transactions and ensure the security of the network.',
    },
    {
      title: 'What is a blockchain?',
      content:
        'A blockchain is a decentralized and distributed ledger that stores data in linked blocks through cryptography. Each block contains a hash of the previous block, a timestamp, and transaction data. This technology is employed in various cryptocurrencies, including Bitcoin, to ensure transparency and transaction security.',
    },
    {
      title: 'What is a cryptocurrency?',
      content:
        'A cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit or double-spend. Many cryptocurrencies operate on decentralized networks based on blockchain technology. They provide a secure and transparent way to conduct digital transactions without the need for intermediaries.',
    },
    {
      title: 'What is a wallet in cryptocurrency?',
      content:
        "A cryptocurrency wallet is a software program or device that stores private and public keys, enabling users to send and receive digital currency and monitor their balance. Wallets can be online, offline, hardware-based, or paper-based. If you want to use Bitcoin or any other cryptocurrency, you'll need a digital wallet to manage your assets securely.",
    },
  ]

  return (
    <section id="faqs">
      <h2 className="my-4">FAQS</h2>
      <Accordion variant="shadow">
        {questions.map((question, index) => (
          <AccordionItem className="p-4" key={index} title={question.title}>
            <p className="max-w-[40rem] text-pretty">{question.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
