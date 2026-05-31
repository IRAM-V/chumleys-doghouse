export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: MenuItem[];
}

export interface MenuData {
  sections: MenuSection[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: "music" | "special" | "trivia" | "other";
}
