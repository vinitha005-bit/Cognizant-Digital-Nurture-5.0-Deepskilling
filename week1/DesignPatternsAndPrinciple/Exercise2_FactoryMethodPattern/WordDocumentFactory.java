package week1.DesignPatternsAndPrinciple.Exercise2_FactoryMethodPattern;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
