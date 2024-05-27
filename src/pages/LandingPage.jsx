/**
 * v0 by Vercel.
 * @see https://v0.dev/t/S1TQvm4OQCo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GamepadIcon className="h-6 w-6" />
          <span className="sr-only">GameHub</span>
        </Link>
        <nav className="bg-foreground ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tournaments
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Leaderboards
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            News
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full pt-12 md:pt-24 lg:pt-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
          <div className="container space-y-10 xl:space-y-16 relative z-10">
            <div className="flex items-center justify-center flex-1">
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Elevate Your Gaming Experience
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    GameHub is the premier platform for hosting and watching competitive gaming tournaments. Join the
                    action and experience the thrill of esports.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Join Now
                  </Link>
                  <Button
                    className="text-sm rounded-md text-black bg-grey-900 dark:text-black"
                    href="#"
                  >
                    Watch Tournaments
                  </Button>
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover object-center"
              height="600"
              src="/Thumbnail.jpeg"
              width="1200"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-2xl dark:bg-gray-800">
                  Featured Tournaments
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Compete in the Biggest Esports Events
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  GameHub hosts a variety of competitive gaming tournaments across multiple titles. Check out our
                  featured events and join the action.
                </p>
              </div>
            </div>
            <Carousel
              className="mt-8"
              opts={{
                align: "start",
                breakpoints: {
                  "(max-width: 1024px)": {
                    slidesToShow: 2,
                  },
                  "(max-width: 768px)": {
                    slidesToShow: 1,
                  },
                },
                gap: 16,
                slidesToScroll: 1,
                slidesToShow: 3,
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <Card className="h-full p-6">
                    <CardContent className="flex flex-col gap-4 p-20">
                      <img
                        alt="Tournament"
                        className="rounded-lg object-cover flex flex-col justify-center items-center"
                        height="225"
                        src="/slide1.jpg"
                        style={{
                          aspectRatio: "200/100",
                          objectFit: "cover",
                          position:"center"
                        }}
                        width="full"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Ongoing</Badge>
                          <div className="text-sm text-gray-500 dark:text-gray-400">June 15 - 20</div>
                        </div>
                        <h3 className="text-xl font-bold">GameHub Invitational</h3>
                        <p className="text-gray-500 dark:text-gray-400">$50,000 Prize Pool</p>
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">Top 8 Teams</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="h-full p-6">
                    <CardContent className="flex flex-col gap-4 p-20">
                    <img
                        alt="Tournament"
                        className="rounded-lg object-cover flex flex-col justify-center items-center"
                        height="225"
                        src="/valo.jpg"
                        style={{
                          aspectRatio: "200/100",
                          objectFit: "cover",
                          position:"center"
                        }}
                        width="full"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Upcoming</Badge>
                          <div className="text-sm text-gray-500 dark:text-gray-400">July 1 - 10</div>
                        </div>
                        <h3 className="text-xl font-bold">GameHub Summer Showdown</h3>
                        <p className="text-gray-500 dark:text-gray-400">$100,000 Prize Pool</p>
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">Top 16 Teams</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="h-full">
                    <CardContent className="flex flex-col gap-4">
                      <img
                        alt="Tournament"
                        className="rounded-lg object-cover"
                        height="225"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "400/225",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Upcoming</Badge>
                          <div className="text-sm text-gray-500 dark:text-gray-400">August 1 - 15</div>
                        </div>
                        <h3 className="text-xl font-bold">GameHub Fall Frenzy</h3>
                        <p className="text-gray-500 dark:text-gray-400">$75,000 Prize Pool</p>
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">Top 12 Teams</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-black inline-block rounded-lg px-3 py-1 text-2xl dark:bg-gray-800">
                  Leaderboards
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Top Players and Teams</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the top players and teams dominating the esports scene on GameHub.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Top Players</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/01.png" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span>John Doe</span>
                          </div>
                        </TableCell>
                        <TableCell>12,345</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/02.png" />
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <span>Jane Smith</span>
                          </div>
                        </TableCell>
                        <TableCell>11,987</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/03.png" />
                              <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                            <span>Michael Johnson</span>
                          </div>
                        </TableCell>
                        <TableCell>10,654</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/04.png" />
                              <AvatarFallback>GT</AvatarFallback>
                            </Avatar>
                            <span>Gaming Titans</span>
                          </div>
                        </TableCell>
                        <TableCell>45,678</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/05.png" />
                              <AvatarFallback>EC</AvatarFallback>
                            </Avatar>
                            <span>Esports Champions</span>
                          </div>
                        </TableCell>
                        <TableCell>42,987</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="/avatars/06.png" />
                              <AvatarFallback>RG</AvatarFallback>
                            </Avatar>
                            <span>Rogue Gaming</span>
                          </div>
                        </TableCell>
                        <TableCell>39,654</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold">GameHub Summer Showdown</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">July 1 - 10</p>
                      </div>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}