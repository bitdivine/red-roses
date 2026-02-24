import { Flower2, Sun, Droplets, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function RoseScentsPage() {
  const scentProfiles = [
    {
      name: 'Classic Rose',
      icon: Flower2,
      description:
        'The quintessential rose fragrance that most people recognize. Rich, sweet, and deeply floral with a velvety quality. ' +
        'This is the scent of traditional red and pink roses, often described as romantic and timeless. ' +
        'It has a full-bodied sweetness with subtle green undertones.',
      notes: ['Sweet', 'Floral', 'Velvety', 'Romantic'],
      color: 'text-rose-600 dark:text-rose-400',
    },
    {
      name: 'Damask',
      icon: Sparkles,
      description:
        'One of the most prized and ancient rose scents, damask roses offer an intense, heady fragrance that is both sweet and spicy. ' +
        'This scent is complex and layered, with a rich, almost intoxicating quality. ' +
        'Often used in perfumery and rose water, it has a depth that lingers beautifully.',
      notes: ['Intense', 'Spicy', 'Sweet', 'Complex'],
      color: 'text-pink-700 dark:text-pink-400',
    },
    {
      name: 'Tea Rose',
      icon: Sun,
      description:
        'Delicate and refined, tea roses have a lighter, more subtle fragrance reminiscent of fresh tea leaves. ' +
        'This scent is elegant and sophisticated, with a clean, slightly citrusy quality. ' +
        'It is less heavy than classic rose, offering a fresh, airy sweetness that feels modern and refined.',
      notes: ['Delicate', 'Fresh', 'Citrusy', 'Refined'],
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      name: 'Myrrh',
      icon: Droplets,
      description:
        'An unusual and distinctive rose scent with warm, resinous undertones. ' +
        'Myrrh-scented roses have an exotic, almost medicinal quality mixed with sweetness. ' +
        'This fragrance is earthy and mysterious, with hints of anise and spice that create a unique, memorable impression.',
      notes: ['Resinous', 'Warm', 'Exotic', 'Spicy'],
      color: 'text-orange-700 dark:text-orange-400',
    },
    {
      name: 'Fruity',
      icon: Sparkles,
      description:
        'These roses surprise with scents of apple, raspberry, peach, or even banana. ' +
        'The fruity notes add a playful, fresh dimension to the traditional rose fragrance. ' +
        'This scent profile is often found in modern hybrid roses and creates a cheerful, uplifting experience.',
      notes: ['Playful', 'Fresh', 'Sweet', 'Uplifting'],
      color: 'text-red-600 dark:text-red-400',
    },
    {
      name: 'Citrus',
      icon: Sun,
      description:
        'Bright and energizing, citrus-scented roses carry notes of lemon, orange, or grapefruit. ' +
        'This fragrance is crisp and clean, offering a refreshing twist on the traditional rose scent. ' +
        'The citrus notes add sparkle and vitality, making these roses feel particularly invigorating.',
      notes: ['Bright', 'Crisp', 'Refreshing', 'Energizing'],
      color: 'text-yellow-700 dark:text-yellow-500',
    },
    {
      name: 'Spicy',
      icon: Sparkles,
      description:
        'Roses with spicy notes evoke clove, cinnamon, or pepper. ' +
        'This warm, aromatic quality adds depth and complexity to the floral sweetness. ' +
        'Spicy roses have a sophisticated, almost sultry character that becomes more pronounced in warm weather.',
      notes: ['Warm', 'Aromatic', 'Complex', 'Sultry'],
      color: 'text-red-800 dark:text-red-300',
    },
    {
      name: 'Musky',
      icon: Droplets,
      description:
        'Deep and sensual, musky roses have an earthy, almost animalic quality beneath their floral sweetness. ' +
        'This scent is rich and enveloping, with a warmth that feels intimate and grounding. ' +
        'Musky notes add a sophisticated, mature dimension to the rose fragrance.',
      notes: ['Deep', 'Sensual', 'Earthy', 'Intimate'],
      color: 'text-stone-700 dark:text-stone-400',
    },
  ];

  const factors = [
    {
      icon: Flower2,
      title: 'Rose Variety',
      description:
        'Different rose species and cultivars produce distinct fragrances due to their unique genetic makeup. ' +
        'Old garden roses tend to have stronger, more complex scents, while many modern hybrid teas were bred for appearance over fragrance.',
    },
    {
      icon: Clock,
      title: 'Bloom Stage',
      description:
        'A rose\'s scent evolves as it opens. Buds may have little fragrance, while fully open blooms release their strongest scent. ' +
        'As petals age, the fragrance can change or fade, with some roses becoming sweeter and others losing intensity.',
    },
    {
      icon: Sun,
      title: 'Climate & Weather',
      description:
        'Temperature and humidity dramatically affect rose fragrance. ' +
        'Warm, humid conditions intensify scent, while cold or very hot weather can diminish it. ' +
        'Roses often smell strongest on warm mornings after a cool night.',
    },
    {
      icon: Clock,
      title: 'Time of Day',
      description:
        'Rose fragrance fluctuates throughout the day. ' +
        'Many roses smell strongest in the morning when essential oils are most concentrated. ' +
        'As the day warms, scent molecules evaporate more quickly, and by evening, the fragrance may be quite different.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Flower2 className="h-8 w-8 text-rose-600 dark:text-rose-400" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Red Roses
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The Scents of Roses
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Roses are celebrated not only for their beauty but for their captivating fragrances.
            Each variety offers a unique olfactory experience, from the classic sweetness we all
            recognize to surprising notes of fruit, spice, and even myrrh. Discover the diverse
            world of rose scents and what makes each one special.
          </p>
        </section>

        <Separator className="my-16" />

        {/* Scent Profiles */}
        <section className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Fragrance Profiles
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the distinct scent categories that define the rose family
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scentProfiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <Card
                  key={profile.name}
                  className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-muted/50 p-3 transition-colors group-hover:bg-muted">
                        <Icon className={`h-6 w-6 ${profile.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold tracking-tight text-foreground">
                          {profile.name}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {profile.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {profile.notes.map((note) => (
                        <span
                          key={note}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Why Scents Vary */}
        <section className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Rose Scents Vary
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding the factors that influence a rose&apos;s fragrance
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {factors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.title}
                  className="group space-y-4 rounded-lg border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{factor.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing Note */}
        <section className="mx-auto mt-16 max-w-3xl space-y-6 rounded-lg border border-border/50 bg-card/30 p-8 text-center">
          <Flower2 className="mx-auto h-12 w-12 text-rose-600 dark:text-rose-400" />
          <h3 className="text-2xl font-semibold text-foreground">
            The Art of Rose Appreciation
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            The best way to experience rose scents is to visit them in person—ideally on a warm
            morning when their fragrance is at its peak. Take time to smell different varieties,
            noting how each one makes you feel. The world of rose scents is endlessly fascinating,
            with new discoveries waiting in every garden.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026. Built with <span className="text-rose-600 dark:text-rose-400">♥</span> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
