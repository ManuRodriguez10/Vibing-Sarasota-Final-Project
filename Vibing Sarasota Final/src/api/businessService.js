import { createApiClient } from './apiClient';

// Business data for Vibing Sarasota
const MOCK_BUSINESSES = {
  'Beaches': [
    { 
      id: '1', 
      name: 'Lido Key', 
      description: 'Lido Key Beach is a wide, white-sand Gulf beach on Lido Key just off downtown Sarasota, known for its clear water, gentle waves, and easy access. It has a big public parking area, restrooms, showers, a pavilion with concessions, and lifeguards, making it a convenient spot for swimming, sunbathing, family beach days, and sunset watching.',
      short_description: 'Wide white-sand Gulf beach with easy access and amenities',
      category: 'Beaches', 
      address: 'Lido Key, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/Lido+Key+Beach/@27.3110757,-82.5875036,3074m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c36a8874021d41:0xca9b102777a21af8!8m2!3d27.3110574!4d-82.5772038!16s%2Fg%2F11b724jyjw?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=ce67afc0-5f67-436b-9ec5-f5b1f10a374c',
      image_url: '/images/beaches/lido-key.jpg'
    },
    { 
      id: '2', 
      name: 'Siesta Key', 
      description: 'Siesta Key Beach is a famous, wide beach with incredibly soft, white quartz sand and usually gentle Gulf water. It has big public parking lots, restrooms, concessions, and lifeguards, making it ideal for long beach days, sandcastles, and sunset walks.',
      short_description: 'Famous beach with incredibly soft white quartz sand',
      category: 'Beaches', 
      address: 'Siesta Key, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/Siesta+Beach/@27.2611383,-82.5730678,6151m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c341f060b6fb8d:0x687e071cf6688da3!8m2!3d27.265423!4d-82.552834!16s%2Fg%2F11bc5_5lt9?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=f19041de-e04e-4b32-b13c-5891ecc308c0',
      image_url: '/images/beaches/siesta-key.jpg',
      featured: true
    },
    { 
      id: '3', 
      name: 'Anna Maria Island', 
      description: 'Anna Maria Island is a laid-back barrier island with old-Florida charm, cute cottages, and several Gulf beaches with soft sand and clear water. It\'s known for relaxed vibes, fishing piers, small local shops and restaurants, and great sunrise/sunset views on opposite sides of the island.',
      short_description: 'Laid-back barrier island with old-Florida charm',
      category: 'Beaches', 
      address: 'Anna Maria Island, FL',
      google_maps_url: 'https://www.google.com/maps/place/Anna+Maria+Island/@27.4917711,-82.7582308,12276m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c3103a2e9d2799:0x6ccdb212e43a70c5!8m2!3d27.5041264!4d-82.7144811!16s%2Fm%2F02wvq17?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=61853503-f3d7-477f-bd07-82396eff3bea',
      image_url: '/images/beaches/anna-maria-island.jpg'
    },
    { 
      id: '4', 
      name: 'Venice Beach', 
      description: 'Venice Beach is a Gulf beach just south of Sarasota known for its slightly darker sand and reputation as the "Shark Tooth Capital of the World." There\'s easy beach access, a pavilion with amenities, and the nearby Venice Fishing Pier, making it popular for swimming, shelling, and hunting for fossilized shark teeth.',
      short_description: 'Known as the "Shark Tooth Capital of the World"',
      category: 'Beaches', 
      address: 'Venice Beach, Venice, FL 34285',
      google_maps_url: 'https://www.google.com/maps/place/Venice+Beach,+Venice,+FL+34285/@27.1000736,-82.4678965,3080m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c35b9767484463:0xb75c9f82918558a5!8m2!3d27.1000553!4d-82.4575967!16s%2Fm%2F048sfmc?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=b090158e-4c7f-4e0f-b134-90278ce7090b',
      image_url: '/images/beaches/venice-beach.jpg'
    },
  ],
  'Exercise Spots': [
    { 
      id: '5', 
      name: 'Legacy Trail', 
      description: 'The Legacy Trail in Sarasota County is a paved, multi-use path built on a former railroad corridor that runs for roughly 18–20+ miles between downtown Sarasota and Venice. It\'s flat, mostly traffic-free, and popular for biking, walking, and running, passing through parks, wetlands, and "old Florida" scenery with rest areas, trailheads, and a few bridges over major roads along the way.',
      short_description: '18-20+ mile paved trail for biking, walking, and running',
      category: 'Exercise Spots', 
      address: 'Sarasota County, FL',
      google_maps_url: 'https://www.google.com/maps/place/Legacy+Trail/@27.2378061,-82.4756619,850m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c3438a3e003547:0x6a49625efdcb86f1!8m2!3d27.2378061!4d-82.4756619!16s%2Fm%2F0vpx7tj?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D',
      image_url: '/images/exercise-spots/legacy-trail.jpg'
    },
    { 
      id: '6', 
      name: 'The Bay Park', 
      description: 'The Bay Park is a 53-acre waterfront park along Sarasota Bay, just north of downtown. It features walking and biking paths, restored mangroves and shoreline, a playground, kayak launches, public art, and frequent free community events like concerts, fitness classes, and outdoor movies—all with big open views of the bay.',
      short_description: '53-acre waterfront park with paths and community events',
      category: 'Exercise Spots', 
      address: 'Sarasota Bay, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/The+Bay+Park/@27.3416445,-82.5513679,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c3411ccdaf9d2d:0x1c06e10ad056eb30!8m2!3d27.3416398!4d-82.548793!16s%2Fg%2F11h0byf4hn?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=413c6ace-4b25-43de-a940-eff0fd95debb',
      image_url: '/images/exercise-spots/the-bay-park.png'
    },
    { 
      id: '7', 
      name: 'Nathan Benderson Park', 
      description: 'Nathan Benderson Park in Sarasota is a large recreational area built around a 400-acre man-made lake, best known as a world-class rowing and paddling venue. It has a 2,000-meter regatta course, walking and biking paths around the water, playgrounds and event spaces, and it regularly hosts rowing regattas, festivals, and community fitness events.',
      short_description: 'World-class rowing and paddling venue with 400-acre lake',
      category: 'Exercise Spots', 
      address: 'Nathan Benderson Park, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/Nathan+Benderson+Park/@27.374249,-82.4526622,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c338bd14033973:0xba4efc2b7130fac1!8m2!3d27.3742443!4d-82.4500873!16s%2Fg%2F11f11nr15f?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=10f99d46-5116-4c4c-938a-f2eca0df1340',
      image_url: '/images/exercise-spots/nathan-benderson-park.jpg'
    },
    { 
      id: '8', 
      name: 'John Ringling Bridge', 
      description: 'The John Ringling Bridge is a landmark causeway connecting downtown Sarasota to St. Armands Key and Lido Key, with sweeping views of Sarasota Bay. It has wide pedestrian paths and gentle inclines, making it a favorite local spot for walking, running, biking, and watching sunrise or sunset over the water.',
      short_description: 'Landmark causeway with pedestrian paths and bay views',
      category: 'Exercise Spots', 
      address: 'John Ringling Causeway, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/West+John+Ringling+Causeway+Park/@27.3285077,-82.5595416,134m/data=!3m1!1e3!4m6!3m5!1s0x88c3413a4e13f6b1:0x6909abe73020c6ef!8m2!3d27.3282293!4d-82.5588855!16s%2Fg%2F11g2zfn8nn?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=a68b43bf-3a60-4dde-8fee-d9e7fb88aa4b',
      image_url: '/images/exercise-spots/john-ringling-bridge.jpg'
    },
    { 
      id: '9', 
      name: 'Ken Thompson Park', 
      description: 'Ken Thompson Park is a quiet bayfront park on City Island just past Mote Marine, with shaded picnic areas, a playground, a fishing pier, boat and kayak launches, and a mangrove boardwalk. It\'s popular for waterfront walks, bird-watching, and catching sunset views back toward the Sarasota skyline.',
      short_description: 'Quiet bayfront park with fishing pier and boardwalk',
      category: 'Exercise Spots', 
      address: 'City Island, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/Ken+Thompson+Park/@27.3356581,-82.5780453,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c36bf76c842c09:0x4fd261b751d6e2e3!8m2!3d27.3356534!4d-82.5754704!16s%2Fg%2F11hd_9_3_w?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=fb0cabd4-37a1-4ca1-802b-1be7c610c29c',
      image_url: '/images/exercise-spots/ken-thompson-park.jpeg'
    },
    { 
      id: '10', 
      name: 'Sapphire Shores Park', 
      description: 'Sapphire Shores Park is a small, bayfront neighborhood park along Sarasota\'s North Tamiami Trail, known for its open green space, playground, and beautiful sunset views over Sarasota Bay. It\'s a relaxed spot for picnics, walking the dog, or sitting on a bench and watching the water and passing boats.',
      short_description: 'Small bayfront park with sunset views',
      category: 'Exercise Spots', 
      address: 'North Tamiami Trail, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/Sapphire+Shores+Park/@27.3772997,-82.5690669,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c31560571c2b41:0x7e972f6fae3c0623!8m2!3d27.377295!4d-82.564196!16s%2Fg%2F11h0j0cdn?entry=tts&g_ep=EgoyMDI1MTEwNC4xIPu8ASoASAFQAw%3D%3D&skid=16087383-3479-4b0b-9b56-32067eb6a6a1',
      image_url: '/images/exercise-spots/sapphire-shores-park.jpg'
    },
  ],
  'Food & Dining': [
    { 
      id: '11', 
      name: 'Beso', 
      description: 'Beso is an intimate Spanish tapas restaurant in downtown Sarasota, known for its moody, stylish atmosphere, creative small plates, and beautifully done paellas. Expect lots of shareable dishes, Spanish wines, and sangria, making it a fun spot for date night or a leisurely dinner with friends.',
      short_description: 'Intimate Spanish tapas restaurant',
      category: 'Food & Dining', 
      address: 'Downtown Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Beso+Sarasota+FL',
      image_url: '/images/food-dining/beso.jpeg',
      price_range: '$$$'
    },
    { 
      id: '12', 
      name: 'Walt\'s Fish Market Restaurant', 
      description: 'Walt\'s Fish Market Restaurant is a long-running Sarasota favorite that combines a working seafood market with a laid-back restaurant and tiki bar. It\'s known for super-fresh, locally caught fish, casual indoor/outdoor seating, and a fun, Old-Florida vibe that works for everything from family dinners to drinks at the bar.',
      short_description: 'Long-running seafood market and restaurant',
      category: 'Food & Dining', 
      address: 'Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Walt%27s+Fish+Market+Restaurant+Sarasota+FL',
      image_url: '/images/food-dining/walts-fish-market.jpg',
      price_range: '$$'
    },
    { 
      id: '13', 
      name: 'Connors Steak & Seafood', 
      description: 'Connors Steak & Seafood is an upscale-casual steakhouse in Sarasota offering hand-cut steaks, fresh seafood, salads, and a full bar in a polished, comfortable setting. It\'s a go-to for date nights, special occasions, and nicer family dinners where you still want a relaxed atmosphere.',
      short_description: 'Upscale-casual steakhouse',
      category: 'Food & Dining', 
      address: 'Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Connors+Steak+%26+Seafood+Sarasota+FL',
      image_url: '/images/food-dining/connors-steak-seafood.jpeg',
      price_range: '$$$'
    },
    { 
      id: '14', 
      name: 'Columbia Restaurant - St.Armands Circle', 
      description: 'Columbia Restaurant on St. Armands Circle is a historic Florida Spanish/Cuban restaurant with tile-lined dining rooms, white tablecloths, and plenty of old-world charm. It\'s famous for its 1905 Salad, sangria, and classic dishes like paella and ropa vieja, making it a popular choice for relaxed but special-feeling lunches and dinners near Lido Key.',
      short_description: 'Historic Spanish/Cuban restaurant',
      category: 'Food & Dining', 
      address: 'St. Armands Circle, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Columbia+Restaurant+St+Armands+Circle+Sarasota+FL',
      image_url: '/images/food-dining/columbia-restaurant.jpg',
      price_range: '$$'
    },
    { 
      id: '15', 
      name: 'Wood Fired Kitchen & Cocktails', 
      description: 'Wood Fired Kitchen & Cocktails is a lively gastropub in the Rosemary District with wood-fired pizzas, shareable plates, burgers, and creative cocktails. Its modern-rustic vibe, open kitchen, and inviting patio make it a great spot for happy hours, casual dinners with friends, and enjoying downtown Sarasota\'s foodie scene.',
      short_description: 'Lively gastropub with wood-fired pizzas',
      category: 'Food & Dining', 
      address: 'Rosemary District, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Wood+Fired+Kitchen+Sarasota+FL',
      image_url: '/images/food-dining/wood-fired-kitchen.jpg',
      price_range: '$$'
    },
    { 
      id: '16', 
      name: 'Marina Jack', 
      description: 'Marina Jack is a waterfront restaurant on Sarasota\'s bayfront, offering multiple dining areas—from a casual outdoor patio to a more formal upstairs dining room—along with sunset cruises from the marina. It\'s known for Gulf seafood, steaks, scenic harbor views, and being one of the classic spots in town for a sunset dinner on the water.',
      short_description: 'Waterfront restaurant with harbor views',
      category: 'Food & Dining', 
      address: 'Sarasota Bayfront, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Marina+Jack+Sarasota+FL',
      image_url: '/images/food-dining/marina-jack.jpg',
      price_range: '$$$',
      featured: true
    },
    { 
      id: '17', 
      name: 'Ocean Prime Sarasota', 
      description: 'Ocean Prime Sarasota is a high-end steak and seafood restaurant at The Quay, with a sleek dining room, raw bar, and polished service. It\'s a splurge spot ideal for celebrations, business dinners, and date nights, with a strong cocktail program and an upscale menu that includes prime steaks, seafood towers, and composed fish dishes.',
      short_description: 'High-end steak and seafood restaurant',
      category: 'Food & Dining', 
      address: 'The Quay, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Ocean+Prime+Sarasota+FL',
      image_url: '/images/food-dining/ocean-prime.jpg',
      price_range: '$$$$'
    },
    { 
      id: '18', 
      name: 'Le Mans Kitchen', 
      description: 'Le Mans Kitchen is an unexpectedly chic café-style restaurant located inside Sarasota Ford, serving elevated sandwiches, salads, burgers, brunch-style plates, and creative drinks in a sleek, motorsport-inspired setting. It feels more like a modern café than a car-dealership snack bar, making it a fun, slightly off-the-radar lunch or light-dinner stop.',
      short_description: 'Chic café-style restaurant',
      category: 'Food & Dining', 
      address: 'Sarasota Ford, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Le+Mans+Kitchen+Sarasota+FL',
      image_url: '/images/food-dining/le-mans-kitchen.jpg',
      price_range: '$$'
    },
    { 
      id: '19', 
      name: 'Bavaro\'s Pizza Napoletana & Pastaria', 
      description: 'Bavaro\'s Pizza Napoletana & Pastaria is a downtown Italian spot focused on authentic, wood-fired Neapolitan pizzas and house-made pastas. With a warm, lively atmosphere and a solid wine list, it\'s a great choice for a relaxed pizza night, family dinner, or casual date with genuinely good Italian comfort food.',
      short_description: 'Authentic wood-fired Neapolitan pizzas',
      category: 'Food & Dining', 
      address: 'Downtown Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Bavaro%27s+Pizza+Napoletana+%26+Pastaria+Sarasota+FL',
      image_url: '/images/food-dining/bavaros-pizza.jpg',
      price_range: '$$'
    },
    { 
      id: '20', 
      name: 'Il Panificio', 
      description: 'Il Panificio is a local favorite pizzeria and bakery-style spot with brick-oven pies, slices, calzones, sandwiches, and simple Italian dishes, plus locations downtown and on Siesta Key. It has a casual, order-at-the-counter feel, making it easy for a quick lunch, takeout pizza night, or a laid-back bite before or after exploring downtown.',
      short_description: 'Local favorite pizzeria and bakery',
      category: 'Food & Dining', 
      address: 'Downtown Sarasota & Siesta Key, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Il+Panificio+1703+Main+St+Sarasota+FL',
      image_url: '/images/food-dining/il-panificio.jpg',
      price_range: '$'
    },
  ],
  'Golf Spots': [
    { 
      id: '21', 
      name: 'Bobby Jones Golf Club', 
      description: 'Bobby Jones Golf Club is Sarasota\'s historic municipal course, a classic Donald Ross design originally opened in 1926 and recently renovated to restore its traditional feel while updating playability. Just minutes from downtown, it combines accessible public golf, a modern practice facility, and adjacent nature trails, making it a convenient spot for locals and visitors looking for affordable rounds, lessons, and casual golf days.',
      short_description: 'Historic municipal course, classic Donald Ross design',
      category: 'Golf Spots', 
      address: 'Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Bobby+Jones+Golf+Club+Sarasota+FL',
      image_url: '/images/golf-spots/bobby-jones-golf-club.jpg'
    },
    { 
      id: '22', 
      name: 'Sarasota Golf Club', 
      description: 'Serenoa Golf Club is a semi-private 18-hole course east of Sarasota that winds through native wetlands, with water in play on every hole for a true shot-maker\'s layout. Known as one of the more challenging but scenic area courses, it has a friendly, local-club feel with a casual clubhouse and practice areas, making it a good choice for golfers who like strategy, scenery, and a relaxed atmosphere.',
      short_description: 'Semi-private course through native wetlands',
      category: 'Golf Spots', 
      address: 'East Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Serenoa+Golf+Club+Sarasota+FL',
      image_url: '/images/golf-spots/sarasota-golf-club.jpg'
    },
    { 
      id: '23', 
      name: 'Laurel Oak Country Club', 
      description: 'Laurel Oak Country Club is a premier private club in east Sarasota with two championship 18-hole courses, 12 Har-Tru tennis courts, and a swim center set inside a gated, upscale community. It has a refined but welcoming atmosphere, year-round family activities, and a large clubhouse, making it popular with members who want a full-service country club lifestyle in addition to quality golf.',
      short_description: 'Premier private club with two championship courses',
      category: 'Golf Spots', 
      address: 'East Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Laurel+Oak+Country+Club+Sarasota+FL',
      image_url: '/images/golf-spots/laurel-oak-country-club.jpg'
    },
    { 
      id: '24', 
      name: 'University Park Country Club', 
      description: 'University Park Country Club is a semi-private club just north of Sarasota with 27 holes of scenic championship golf routed through mature trees, lakes, and residential neighborhoods. Regularly recognized among Southwest Florida\'s top courses, it also offers tennis, pickleball, fitness, and popular on-site dining, making it a good fit for players who want beautiful, park-like golf with a lively but polished country club scene.',
      short_description: 'Semi-private club with 27 holes',
      category: 'Golf Spots', 
      address: 'North of Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=University+Park+Country+Club+FL',
      image_url: '/images/golf-spots/university-park-country-club.jpeg'
    },
    { 
      id: '25', 
      name: 'Lakewood Ranch Golf & Country Club', 
      description: 'Lakewood Ranch Golf & Country Club is a private club in Lakewood Ranch with multiple championship 18-hole courses set among upscale neighborhoods and preserved natural areas. Along with golf, it offers tennis, fitness, pools, and a busy social calendar, making it a hub for members who want resort-style amenities, league play, and sunset views over manicured fairways.',
      short_description: 'Private club with multiple championship courses',
      category: 'Golf Spots', 
      address: 'Lakewood Ranch, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Lakewood+Ranch+Golf+%26+Country+Club+Lakewood+Ranch+FL',
      image_url: '/images/golf-spots/lakewood-ranch-golf-country-club.jpeg'
    },
    { 
      id: '26', 
      name: 'The Concession Golf Club', 
      description: 'The Concession Golf Club is an ultra-exclusive, private Jack Nicklaus Signature course designed with Tony Jacklin, known for its demanding championship layout, no parallel fairways, and pristine conditioning in a quiet, wooded setting. It\'s consistently ranked among Florida\'s top courses and caters to serious golfers looking for a pure golf experience with top-tier practice facilities and a very upscale, low-key club environment.',
      short_description: 'Ultra-exclusive Jack Nicklaus Signature course',
      category: 'Golf Spots', 
      address: 'Bradenton, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=The+Concession+Golf+Club+Bradenton+FL',
      image_url: '/images/golf-spots/the-concession-golf-club.jpg',
      featured: true
    },
  ],
  'Shopping': [
    { 
      id: '27', 
      name: 'The Mall at University Town Center', 
      description: 'The Mall at University Town Center is a large, modern indoor mall near I-75 and University Parkway with over 100 shops, department stores, and sit-down and quick-service restaurants. It\'s a go-to spot for fashion, dining, and events in an air-conditioned setting, making it a popular choice for shopping days, family outings, and rainy-day fun.',
      short_description: 'Large modern indoor mall with 100+ shops',
      category: 'Shopping', 
      address: 'University Parkway, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=The+Mall+at+University+Town+Center+Sarasota+FL',
      image_url: '/images/shopping/university-town-center.jpeg'
    },
    { 
      id: '28', 
      name: 'St. Armands Circle', 
      description: 'St. Armands Circle is a lively, walkable shopping and dining district on Lido Key with a ring of boutiques, galleries, sweets shops, and restaurants around a central park. With its tropical landscaping, outdoor seating, and easy access to nearby Lido Beach, it\'s perfect for strolling, people-watching, window-shopping, and relaxed lunches or evening dinners.',
      short_description: 'Lively walkable shopping and dining district',
      category: 'Shopping', 
      address: 'Lido Key, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=St.+Armands+Circle+Sarasota+FL',
      image_url: '/images/shopping/st-armands-circle.jpeg',
      featured: true
    },
    { 
      id: '29', 
      name: 'Crossings at Siesta Key', 
      description: 'Crossings at Siesta Key is a smaller indoor shopping center along South Tamiami Trail with a mix of everyday retail, services, fitness, and casual dining just a short drive from Siesta Key\'s beaches. It\'s a convenient, low-key stop for errands, a quick bite, or escaping the midday sun before or after time on the water.',
      short_description: 'Smaller shopping center near Siesta Key',
      category: 'Shopping', 
      address: 'South Tamiami Trail, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Crossings+at+Siesta+Key+Sarasota+FL',
      image_url: '/images/shopping/crossings-at-siesta-key.jpg'
    },
  ],
  'Hotels': [
    { 
      id: '30', 
      name: 'The Ritz-Carlton Sarasota', 
      description: 'The Ritz-Carlton Sarasota is a luxury waterfront resort on Sarasota Bay with upscale rooms and suites, a full-service spa, resort-style pool, golf access, and multiple on-site restaurants. Guests also get access to the private Beach Club on Lido Key, making it a top choice for high-end getaways, family vacations, and special-occasion stays on the Gulf Coast.',
      short_description: 'Luxury waterfront resort with private Beach Club',
      category: 'Hotels', 
      address: 'Sarasota Bay, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/place/The+Ritz-Carlton,+Sarasota/@27.3376099,-82.5490532,849m/data=!3m1!1e3!4m9!3m8!1s0x88c3401047901747:0x7dc955da45eddd8b!5m2!4m1!1i2!8m2!3d27.3376099!4d-82.5490532!16s%2Fg%2F1tdxg24y?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D',
      image_url: '/images/hotels/ritz-carlton-sarasota.jpg',
      price_range: '$$$$',
      featured: true
    },
    { 
      id: '31', 
      name: 'The Westin Sarasota', 
      description: 'The Westin Sarasota is a modern high-rise hotel near Sarasota Bay with sleek rooms, a rooftop pool and bar, spa, fitness center, and on-site dining. Its central location by the bayfront and downtown makes it a convenient spot for business trips, couples\' stays, and relaxing weekends with great views and easy access to restaurants and cultural attractions.',
      short_description: 'Modern high-rise hotel with rooftop pool',
      category: 'Hotels', 
      address: 'Sarasota Bay, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=The+Westin+Sarasota+Sarasota+FL',
      image_url: '/images/hotels/westin-sarasota.jpeg',
      price_range: '$$$'
    },
    { 
      id: '32', 
      name: 'Siesta Key Palms Resort', 
      description: 'Siesta Key Palms Resort is a laid-back, tropical-style boutique resort just over the bridge from Siesta Key with lush courtyards, two outdoor pools, hammocks, and cozy rooms and suites, some with kitchenettes. Its relaxed, old-Florida vibe and short drive to Siesta Key Beach make it ideal for beach-focused stays, couples\' escapes, and casual trips with friends.',
      short_description: 'Laid-back tropical-style boutique resort',
      category: 'Hotels', 
      address: 'Near Siesta Key, Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Siesta+Key+Palms+Resort+Sarasota+FL',
      image_url: '/images/hotels/siesta-key-palms-resort.jpg',
      price_range: '$$'
    },
    { 
      id: '33', 
      name: 'Art Ovation Hotel', 
      description: 'Art Ovation Hotel is an art-focused boutique hotel in downtown Sarasota with contemporary rooms, rotating art exhibits, and a rooftop pool and bar. It\'s within easy walking distance of theaters, galleries, and the bayfront, making it a fun home base for creative getaways, date nights, and enjoying Sarasota\'s downtown dining and nightlife.',
      short_description: 'Art-focused boutique hotel downtown',
      category: 'Hotels', 
      address: 'Downtown Sarasota, FL',
      google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Art+Ovation+Hotel+Sarasota+FL',
      image_url: '/images/hotels/art-ovation-hotel.jpg',
      price_range: '$$$'
    },
  ],
};

// API configuration
const ENV_API_URL = import.meta.env.VITE_API_URL || '';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || '';

const BUSINESS_API_URL =
  import.meta.env.VITE_BUSINESSES_API_URL ||
  (ENV_API_URL && !SUPABASE_KEY ? ENV_API_URL : '');

const businessApiClient = BUSINESS_API_URL
  ? createApiClient(BUSINESS_API_URL)
  : null;
const USE_BUSINESS_MOCK_DATA = !businessApiClient;

const SUGGESTIONS_API_URL =
  import.meta.env.VITE_SUGGESTIONS_API_URL || ENV_API_URL;
const SUGGESTIONS_API_KEY =
  import.meta.env.VITE_SUGGESTIONS_API_KEY || SUPABASE_KEY || '';

const suggestionApiClient = SUGGESTIONS_API_URL
  ? createApiClient(SUGGESTIONS_API_URL, SUGGESTIONS_API_KEY)
  : null;
const HAS_SUGGESTIONS_API = Boolean(suggestionApiClient && SUGGESTIONS_API_URL);

export const businessService = {
  /**
   * Get businesses filtered by category
   * @param {Object} filters - Filter options
   * @param {string} filters.category - Business category
   * @returns {Promise<Array>} Array of businesses
   */
  async filter(filters = {}) {
    if (USE_BUSINESS_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const category = filters.category;
      return MOCK_BUSINESSES[category] || [];
    }

    try {
      const queryParams = new URLSearchParams();
      if (filters.category) queryParams.append('category', filters.category);
      
      const endpoint = `/businesses${queryParams.toString() ? `?${queryParams}` : ''}`;
      return await businessApiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch businesses:', error);
      // Fallback to mock data on error
      const category = filters.category;
      return MOCK_BUSINESSES[category] || [];
    }
  },

  /**
   * Get a single business by ID
   * @param {string} id - Business ID
   * @returns {Promise<Object>} Business object
   */
  async getById(id) {
    if (USE_BUSINESS_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      // Search through all mock data
      for (const businesses of Object.values(MOCK_BUSINESSES)) {
        const business = businesses.find(b => b.id === id);
        if (business) return business;
      }
      return null;
    }

    try {
      return await businessApiClient.get(`/businesses/${id}`);
    } catch (error) {
      console.error('Failed to fetch business:', error);
      return null;
    }
  },
};

export const suggestedBusinessService = {
  /**
   * Create a new suggested business
   * @param {Object} data - Business suggestion data
   * @returns {Promise<Object>} Created suggestion
   */
  async create(data) {
    if (!HAS_SUGGESTIONS_API) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Suggested business (mock):', data);
      return {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
      };
    }

    try {
      return await suggestionApiClient.post('/suggested_businesses', data);
    } catch (error) {
      console.error('Failed to create suggested business:', error);
      throw error;
    }
  },
};
