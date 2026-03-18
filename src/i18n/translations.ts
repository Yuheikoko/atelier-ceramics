export type Lang = 'en' | 'ja';

export const translations = {
  en: {
    nav: {
      collections: 'Collections',
      story: 'Craft Story',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Aichi, Japan',
      title: 'Where Tradition\nMeets the World',
      subtitle: 'Discover handcrafted ceramics from Seto and Tokoname, two of Japan\'s most celebrated pottery regions, presented to collectors and institutions worldwide.',
      cta: 'Explore Collections',
    },
    mission: {
      eyebrow: 'Our Mission',
      title: 'Bridging Ancient Craft\nand Modern Sensibility',
      p1: 'We believe the quiet beauty of Japanese ceramics deserves a global audience. Each piece carries centuries of knowledge, shaped by hands that understand both tradition and transformation.',
      p2: 'ATELIER is a bridge — connecting artisans of Aichi with collectors, designers, and cultural institutions around the world.',
      stat1: { value: '1,000+', label: 'Years of craft heritage' },
      stat2: { value: '2', label: 'Legendary pottery regions' },
      stat3: { value: 'Global', label: 'Exhibition presence' },
    },
    collections: {
      eyebrow: 'Collections',
      title: 'Works of Enduring Craft',
      subtitle: 'Each piece is selected for its authenticity, quality, and the story it carries.',
      items: [
        { title: 'Seto Ware', region: 'Seto, Aichi' },
        { title: 'Tokoname Ware', region: 'Tokoname, Aichi' },
        { title: 'Seto Ware', region: 'Seto, Aichi' },
        { title: 'Tokoname Ware', region: 'Tokoname, Aichi' },
      ],
      cta: 'Inquire About This Piece',
    },
    story: {
      eyebrow: 'Craft Story',
      title: 'A Thousand Years\nin the Making',
      seto: {
        label: 'Seto Ware',
        title: 'Japan\'s Most Beloved Pottery',
        body: 'Seto, a city in Aichi Prefecture, has been the center of Japanese ceramics for over a thousand years; its significance is so profound that the Japanese word for ceramics — "setomono" — literally means "things from Seto." Known for its delicate glazes and refined forms, Seto ware testifies to centuries of unbroken craft tradition.',
      },
      tokoname: {
        label: 'Tokoname Ware',
        title: 'Six Ancient Kilns of Japan',
        body: 'Tokoname is one of Japan\'s Six Ancient Kilns, with a history stretching back to the Heian period. Prized for its distinctive red-brown clay and simple, elegant forms, Tokoname ware has influenced tea ceremony culture and daily life across Japan for generations.',
      },
    },
    team: {
      eyebrow: 'Team',
      title: 'The People Behind ATELIER',
      members: [
        {
          name: 'Taisei Mano',
          nameJa: '眞野 泰成',
          role: 'Founder & Director',
          bio: 'Dedicated to showcasing the depth of Japanese craftsmanship to the world. Drives relationships with artisans, curates the ATELIER collection, and leads all international outreach.',
        },
        {
          name: 'Yuhei Koike',
          nameJa: '小池 悠平',
          role: 'Co-Founder',
          bio: 'Passionate about connecting Japan\'s rich cultural heritage with the global community. Supports creative direction and partnership development.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start a Conversation',
      subtitle: 'Whether you\'re a collector, curator, or simply curious — we\'d love to hear from you.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you. We\'ll be in touch soon.',
        error: 'Something went wrong. Please try again.',
        required: 'This field is required.',
        invalidEmail: 'Please enter a valid email address.',
      },
    },
    footer: {
      tagline: 'Tradition & Innovation from Japan',
      license: 'License No. 愛知県知事許可（般-5）第 12345号',
      copy: '© 2025 ATELIER. All rights reserved.',
    },
  },
  ja: {
    nav: {
      collections: 'コレクション',
      story: '伝統の物語',
      team: 'チーム',
      contact: 'お問い合わせ',
    },
    hero: {
      eyebrow: '愛知県、日本',
      title: '伝統が、\n世界へ。',
      subtitle: '日本有数の陶芸の産地、瀬戸と常滑。その匠の技が生み出す器を世界の舞台へ届けます。',
      cta: 'コレクションを見る',
    },
    mission: {
      eyebrow: 'ミッション',
      title: '受け継がれる技術と、\n時代を超えた美しさ',
      p1: '日本の陶磁器が持つ静かな美しさには、世界に届けられるべき価値があります。一つひとつの器に、何世紀にもわたる知識と、伝統と革新を理解した手の技が宿っています。',
      p2: 'ATELIERは、愛知県の職人と世界のコレクター・デザイナー・文化機関をつなぐ架け橋です。',
      stat1: { value: '1,000年以上', label: '受け継がれる伝統' },
      stat2: { value: '2産地', label: '伝説の陶芸の里' },
      stat3: { value: '世界へ', label: '国際展示への参加' },
    },
    collections: {
      eyebrow: 'コレクション',
      title: '時を超える、匠の仕事',
      subtitle: '本物の品質と、器が持つ物語を基準に厳選した作品をご紹介します。',
      items: [
        { title: '瀬戸焼', region: '愛知県瀬戸市' },
        { title: '常滑焼', region: '愛知県常滑市' },
        { title: '瀬戸焼', region: '愛知県瀬戸市' },
        { title: '常滑焼', region: '愛知県常滑市' },
      ],
      cta: 'この作品について問い合わせる',
    },
    story: {
      eyebrow: '伝統の物語',
      title: '千年の時が\n紡ぐもの',
      seto: {
        label: '瀬戸焼',
        title: '日本を代表する焼き物の里',
        body: '愛知県瀬戸市は、千年以上にわたって日本の陶磁器文化の中心地であり続けてきました。その歴史は深く、「陶磁器」を意味する日本語「せともの（瀬戸物）」は、まさにこの地の名に由来します。繊細な釉薬と洗練されたフォルムが特徴の瀬戸焼は、途絶えることなく受け継がれてきた技の証です。',
      },
      tokoname: {
        label: '常滑焼',
        title: '日本六古窯のひとつ',
        body: '常滑は、日本六古窯のひとつに数えられる歴史ある産地で、その起源は平安時代にまで遡ります。独特の赤褐色の土と、飾らない端正なフォルムが特徴で、茶道文化や日本人の日常生活に深く根ざした焼き物として、長く愛されてきました。',
      },
    },
    team: {
      eyebrow: 'チーム',
      title: 'ATELIERを支える人々',
      members: [
        {
          name: 'Taisei Mano',
          nameJa: '眞野 泰成',
          role: 'ファウンダー & ディレクター',
          bio: '日本の職人技の奥深さを世界に届けることに尽力する。職人との関係構築とコレクションのキュレーション、海外への発信全般を担う。',
        },
        {
          name: 'Yuhei Koike',
          nameJa: '小池 悠平',
          role: '共同創業者',
          bio: '日本の豊かな文化遺産を世界へと繋ぐことに情熱を注ぐ。クリエイティブディレクションとパートナーシップ構築をサポートする。',
        },
      ],
    },
    contact: {
      eyebrow: 'お問い合わせ',
      title: 'お気軽にご連絡ください',
      subtitle: 'コレクター、キュレーター、あるいは単純に興味をお持ちの方も、どうぞお気軽にお声がけください。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        submit: '送信する',
        sending: '送信中...',
        success: 'ありがとうございます。近日中にご連絡いたします。',
        error: 'エラーが発生しました。再度お試しください。',
        required: 'この項目は必須です。',
        invalidEmail: '正しいメールアドレスを入力してください。',
      },
    },
    footer: {
      tagline: '伝統と革新の舞台',
      license: '愛知県知事許可（般-5）第 12345号',
      copy: '© 2025 ATELIER. All rights reserved.',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
