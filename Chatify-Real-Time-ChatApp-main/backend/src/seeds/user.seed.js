import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "aarya.sharma@example.com",
    fullName: "Aarya Sharma",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aarya",
  },
  {
    email: "siya.verma@example.com",
    fullName: "Siya Verma",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Siya",
  },
  {
    email: "tanvi.nair@example.com",
    fullName: "Tanvi Nair",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Tanvi",
  },
  {
    email: "ananya.patel@example.com",
    fullName: "Ananya Patel",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ananya",
  },
  {
    email: "isha.mehra@example.com",
    fullName: "Isha Mehra",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Isha",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kavya",
  },
  {
    email: "meera.reddy@example.com",
    fullName: "Meera Reddy",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Meera",
  },
  {
    email: "prisha.kapoor@example.com",
    fullName: "Prisha Kapoor",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Prisha",
  },

  // Male Users
  {
    email: "arjun.kumar@example.com",
    fullName: "Arjun Kumar",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Arjun",
  },
  {
    email: "vihaan.shah@example.com",
    fullName: "Vihaan Shah",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Vihaan",
  },
  {
    email: "dev.agarwal@example.com",
    fullName: "Dev Agarwal",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dev",
  },
  {
    email: "advait.mishra@example.com",
    fullName: "Advait Mishra",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Advait",
  },
  {
    email: "shreyas.banerjee@example.com",
    fullName: "Shreyas Banerjee",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Shreyas",
  },
  {
    email: "ronit.chowdhury@example.com",
    fullName: "Ronit Chowdhury",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ronit",
  },
  {
    email: "ayush.sen@example.com",
    fullName: "Ayush Sen",
    password: "123456",
    profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ayush",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();