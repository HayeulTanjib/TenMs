export async function fetchData(){
    const response = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-cours');
    const data = await response.json();
    return data;
}