"use client"

import { useTheme } from "next-themes"
import { BarChart, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedAtoms } from "@/components/animated-atoms"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <AnimatedAtoms />
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex flex-1">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold sm:inline-block text-blue-600 dark:text-blue-400">Нанотехнологии</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#intro" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Введение
              </Link>
              <Link href="#applications" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Применения
              </Link>
              <Link href="#future" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Будущее
              </Link>
              <Link href="#statistics" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Статистика
              </Link>
              <Link href="#timeline" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Хронология
              </Link>
              <Link href="#conclusion" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Заключение
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="outline"
                className="ml-auto hidden md:flex text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 relative z-10">
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/30 dark:to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-700 dark:text-blue-300">
                  Мир нанотехнологий
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  Исследуйте удивительный мир нанотехнологий, их применение и будущие перспективы
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                  Узнать больше
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  Исследования
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="intro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Что такое нанотехнологии?
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Нанотехнологии — это область науки и техники, связанная с манипуляцией веществом на атомарном и
                молекулярном уровне. Приставка "нано" означает одну миллиардную часть метра (10^-9 м). Для сравнения,
                диаметр человеческого волоса составляет около 80,000-100,000 нанометров.
              </p>
              <div className="mt-6 w-full max-w-4xl">
                <Card className="border-blue-200 dark:border-blue-900">
                  <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                    <CardTitle className="text-blue-700 dark:text-blue-300">
                      Ключевые особенности нанотехнологий
                    </CardTitle>
                    <CardDescription>Что делает нанотехнологии уникальными</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 sm:grid-cols-2 pt-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400">Квантовые эффекты</h3>
                      <p className="text-sm text-muted-foreground">
                        На наноуровне материалы проявляют квантовые эффекты, которые могут радикально менять их
                        свойства.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                        Высокое отношение площади к объему
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Наноматериалы имеют огромную площадь поверхности относительно их объема, что усиливает их
                        реакционную способность.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400">Самосборка</h3>
                      <p className="text-sm text-muted-foreground">
                        Некоторые наноструктуры способны к самосборке, формируя сложные системы без внешнего
                        вмешательства.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400">Междисциплинарность</h3>
                      <p className="text-sm text-muted-foreground">
                        Нанотехнологии объединяют физику, химию, биологию, материаловедение и инженерию.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="applications" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Сферы применения
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Нанотехнологии находят применение в различных отраслях, революционизируя традиционные подходы и создавая
                новые возможности.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Медицина</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Адресная доставка лекарств</li>
                    <li>Диагностика заболеваний</li>
                    <li>Регенеративная медицина</li>
                    <li>Антибактериальные покрытия</li>
                    <li>Биосенсоры</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Электроника</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Квантовые компьютеры</li>
                    <li>Миниатюризация устройств</li>
                    <li>Гибкая электроника</li>
                    <li>Энергоэффективные дисплеи</li>
                    <li>Наносенсоры</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Материаловедение</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Сверхпрочные материалы</li>
                    <li>Самоочищающиеся поверхности</li>
                    <li>Теплоизоляционные материалы</li>
                    <li>Антикоррозийные покрытия</li>
                    <li>Композитные материалы</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Энергетика</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Солнечные элементы</li>
                    <li>Топливные элементы</li>
                    <li>Накопители энергии</li>
                    <li>Катализаторы</li>
                    <li>Термоэлектрические материалы</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Экология</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Очистка воды</li>
                    <li>Фильтрация воздуха</li>
                    <li>Ремедиация почв</li>
                    <li>Мониторинг загрязнений</li>
                    <li>Биоразлагаемые материалы</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-900 hover:shadow-md hover:shadow-blue-200 dark:hover:shadow-blue-900/30 transition-all">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="text-blue-700 dark:text-blue-300">Космос и оборона</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Легкие и прочные материалы</li>
                    <li>Защитные покрытия</li>
                    <li>Миниатюрные спутники</li>
                    <li>Системы жизнеобеспечения</li>
                    <li>Сенсоры и детекторы</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="future" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Будущее нанотехнологий
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Перспективы развития нанотехнологий открывают новые горизонты для человечества
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <Tabs defaultValue="medicine" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-blue-100 dark:bg-blue-950">
                  <TabsTrigger
                    value="medicine"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Медицина
                  </TabsTrigger>
                  <TabsTrigger
                    value="computing"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Вычисления
                  </TabsTrigger>
                  <TabsTrigger
                    value="energy"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Энергетика
                  </TabsTrigger>
                  <TabsTrigger
                    value="materials"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Материалы
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="medicine"
                  className="p-4 border rounded-md mt-2 border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Будущее наномедицины</h3>
                  <p className="mb-4">
                    Наномедицина обещает революцию в здравоохранении с персонализированными методами лечения и
                    диагностики.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Наноробототехника для хирургических вмешательств на клеточном уровне</li>
                    <li>Искусственные органы с наноструктурированными тканями</li>
                    <li>Системы раннего обнаружения заболеваний на молекулярном уровне</li>
                    <li>Нейроинтерфейсы для лечения неврологических заболеваний</li>
                  </ul>
                </TabsContent>
                <TabsContent
                  value="computing"
                  className="p-4 border rounded-md mt-2 border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Будущее нановычислений</h3>
                  <p className="mb-4">
                    Нанотехнологии трансформируют вычислительную технику, преодолевая ограничения традиционной
                    электроники.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Квантовые компьютеры на основе наноструктур</li>
                    <li>Молекулярные компьютеры с плотностью хранения данных на атомарном уровне</li>
                    <li>Нейроморфные вычисления, имитирующие работу мозга</li>
                    <li>Самовосстанавливающиеся вычислительные системы</li>
                  </ul>
                </TabsContent>
                <TabsContent
                  value="energy"
                  className="p-4 border rounded-md mt-2 border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Будущее наноэнергетики</h3>
                  <p className="mb-4">Нанотехнологии предлагают решения для устойчивого энергетического будущего.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Солнечные элементы с КПД более 50% благодаря наноструктурированным материалам</li>
                    <li>Сверхъемкие накопители энергии на основе наноматериалов</li>
                    <li>Термоэлектрические преобразователи для утилизации отходящего тепла</li>
                    <li>Водородная энергетика с нанокатализаторами</li>
                  </ul>
                </TabsContent>
                <TabsContent
                  value="materials"
                  className="p-4 border rounded-md mt-2 border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Будущее наноматериалов</h3>
                  <p className="mb-4">
                    Наноматериалы будущего изменят наше представление о возможностях физических объектов.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Программируемая материя, способная менять свои свойства по команде</li>
                    <li>Материалы с отрицательным коэффициентом преломления для создания "плащей-невидимок"</li>
                    <li>Самовосстанавливающиеся конструкционные материалы</li>
                    <li>Биомиметические материалы, имитирующие природные структуры</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section id="statistics" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Распределение применения нанотехнологий
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Статистика использования нанотехнологий в различных отраслях
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <Card className="border-blue-200 dark:border-blue-900">
                <CardHeader className="flex flex-row items-center bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="mr-2 text-blue-700 dark:text-blue-300">Распределение по отраслям</CardTitle>
                  <BarChart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[400px] w-full">
                    <div className="text-center">
                      <div className="mb-8 flex flex-col items-center">
                        <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                          Применение нанотехнологий по отраслям
                        </div>
                        <div className="text-sm text-muted-foreground">Процентное соотношение</div>
                      </div>
                      <div className="flex justify-center">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Медицина</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "35%" }}
                              ></div>
                            </div>
                            <div className="pl-4">35%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Электроника</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                            <div className="pl-4">25%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Материаловедение</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                            <div className="pl-4">20%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Энергетика</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "10%" }}
                              ></div>
                            </div>
                            <div className="pl-4">10%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Экология</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "5%" }}
                              ></div>
                            </div>
                            <div className="pl-4">5%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-32 text-right pr-4">Космос и оборона</div>
                            <div className="w-[300px] bg-blue-100 dark:bg-blue-900/30 rounded-full h-4">
                              <div
                                className="bg-blue-600 dark:bg-blue-500 h-4 rounded-full"
                                style={{ width: "5%" }}
                              ></div>
                            </div>
                            <div className="pl-4">5%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="timeline" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Развитие нанотехнологий
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Хронология активного применения нанотехнологий с 2000 по 2025 год
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <Card className="border-blue-200 dark:border-blue-900">
                <CardHeader className="flex flex-row items-center bg-blue-50 dark:bg-blue-950/50 rounded-t-lg">
                  <CardTitle className="mr-2 text-blue-700 dark:text-blue-300">
                    Хронология развития нанотехнологий
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[500px] w-full">
                    <div className="relative h-full w-full">
                      {/* Timeline chart */}
                      <div className="absolute bottom-0 left-0 right-0 h-[400px] border-b border-l border-blue-200 dark:border-blue-800">
                        {/* Y-axis labels */}
                        <div className="absolute -left-20 top-0 bottom-0 flex flex-col justify-between text-sm text-muted-foreground">
                          <div>Высокое</div>
                          <div>Среднее</div>
                          <div>Низкое</div>
                          <div>Начальное</div>
                        </div>

                        {/* X-axis labels */}
                        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm text-muted-foreground">
                          <div>2000</div>
                          <div>2005</div>
                          <div>2010</div>
                          <div>2015</div>
                          <div>2020</div>
                          <div>2025</div>
                        </div>

                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-3">
                          {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className="border-t border-r border-blue-100 dark:border-blue-900/30" />
                          ))}
                        </div>

                        {/* Lines for different fields */}
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 500 400"
                          preserveAspectRatio="none"
                        >
                          {/* Медицина */}
                          <path
                            d="M0,380 L100,350 L200,280 L300,180 L400,100 L500,50"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3"
                            className="dark:stroke-blue-400"
                          />

                          {/* Электроника */}
                          <path
                            d="M0,390 L100,370 L200,320 L300,220 L400,120 L500,70"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="3"
                            className="dark:stroke-blue-300"
                          />

                          {/* Материаловедение */}
                          <path
                            d="M0,370 L100,340 L200,300 L300,240 L400,160 L500,90"
                            fill="none"
                            stroke="#93c5fd"
                            strokeWidth="3"
                            className="dark:stroke-blue-200"
                          />

                          {/* Энергетика */}
                          <path
                            d="M0,395 L100,385 L200,350 L300,270 L400,190 L500,130"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="3"
                            className="dark:stroke-blue-500"
                          />
                        </svg>

                        {/* Key milestones */}
                        <div className="absolute top-[120px] left-[300px] -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="absolute -top-16 -left-24 w-48 bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-xs border border-blue-200 dark:border-blue-800">
                              <strong>2015:</strong> Прорыв в наномедицине - первые клинические испытания наночастиц для
                              адресной доставки лекарств
                            </div>
                            <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-900" />
                          </div>
                        </div>

                        <div className="absolute top-[70px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="absolute -top-16 -left-24 w-48 bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-xs border border-blue-200 dark:border-blue-800">
                              <strong>2020:</strong> Массовое внедрение наноэлектроники в потребительские устройства
                            </div>
                            <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-900" />
                          </div>
                        </div>

                        <div className="absolute top-[240px] left-[200px] -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="absolute -top-16 -left-24 w-48 bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-xs border border-blue-200 dark:border-blue-800">
                              <strong>2010:</strong> Начало коммерческого использования наноматериалов в промышленности
                            </div>
                            <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-900" />
                          </div>
                        </div>

                        <div className="absolute top-[350px] left-[100px] -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="absolute -bottom-16 -left-24 w-48 bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-xs border border-blue-200 dark:border-blue-800">
                              <strong>2005:</strong> Первые лабораторные прототипы наноустройств
                            </div>
                            <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-900" />
                          </div>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="absolute top-0 right-0 flex flex-col gap-2 bg-white/80 dark:bg-black/80 p-2 rounded-md border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-6 bg-blue-600 dark:bg-blue-400 rounded-sm" />
                          <span className="text-xs">Медицина</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-6 bg-blue-400 dark:bg-blue-300 rounded-sm" />
                          <span className="text-xs">Электроника</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-6 bg-blue-300 dark:bg-blue-200 rounded-sm" />
                          <span className="text-xs">Материаловедение</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-6 bg-blue-700 dark:bg-blue-500 rounded-sm" />
                          <span className="text-xs">Энергетика</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="conclusion" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-blue-700 dark:text-blue-300">
                Заключение
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Нанотехнологии продолжают развиваться, открывая новые перспективы и возможности для улучшения жизни
                человечества.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
