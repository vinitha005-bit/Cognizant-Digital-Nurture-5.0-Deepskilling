package week1.Dsa.Exercise2_EcommercePlatformSearchFunction;
 
public class Product {

    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    public static Product linearsearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    public static Product binarysearch(Product[] products, int id) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (products[mid].productId < id) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        Product result1 = linearsearch(products, 103);

        if (result1 != null) {
            System.out.println("Linear Search Found: "
                    + result1.productName+" in category " + result1.category);
        }

        Product result2 = binarysearch(products, 104);

        if (result2 != null) {
            System.out.println("Binary Search Found: "
                    + result2.productName);
        }
    }
}
