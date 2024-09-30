import { json } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    return json(JSON.parse(data));
}

// @ts-ignore
export async function PUT({ request }) {
    const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.json');
    const blogs = await request.json();
    await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2));
    return json({ success: true });
}

// @ts-ignore
export async function POST({ request }) {
    const { title, content } = await request.json();
    
    // Here, implement your logic to create a new blog post
    const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const blogs = JSON.parse(data);
    
    const newBlog = {
        id: blogs.length + 1,
        title,
        content,
        createdAt: new Date().toISOString()
    };
    
    blogs.push(newBlog);
    await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2));

    return json({ success: true, message: 'Blog created successfully' });
}