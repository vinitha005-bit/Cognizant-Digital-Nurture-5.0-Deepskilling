package week1.DesignPatternsAndPrinciple.Exercise2_FactoryMethodPattern;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
