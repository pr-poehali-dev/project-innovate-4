import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Это законно?",
      answer:
        "Использование VPN и инструментов обхода блокировок является законным во многих странах и широко применяется для защиты конфиденциальности. Мы рекомендуем ознакомиться с местным законодательством.",
    },
    {
      question: "Снизится ли скорость интернета?",
      answer:
        "Незначительно. Наши оптимизированные серверы обеспечивают скорость до 10 Гбит/с. Большинство пользователей не замечают разницы даже при просмотре 4K видео.",
    },
    {
      question: "На каких устройствах работает Free Pass?",
      answer:
        "Windows, macOS, iOS, Android, Linux и роутеры. Одна подписка покрывает до 5 устройств одновременно.",
    },
    {
      question: "Сохраняете ли вы логи моей активности?",
      answer:
        "Нет. Мы придерживаемся строгой политики нулевых логов — мы не храним историю ваших посещений, запросов или данных. Ваша приватность абсолютна.",
    },
    {
      question: "Как быстро можно начать пользоваться?",
      answer:
        "Скачайте приложение, войдите в аккаунт и нажмите кнопку подключения. Весь процесс занимает менее 2 минут. Никаких технических знаний не требуется.",
    },
    {
      question: "Есть ли пробный период?",
      answer:
        "Да, мы предлагаем 7 дней бесплатного использования без привязки карты. Попробуйте все функции без риска.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о Free Pass, безопасности и начале работы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}