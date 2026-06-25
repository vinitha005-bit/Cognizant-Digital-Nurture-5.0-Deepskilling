package week1.DesignPatternsAndPrinciple.Exercise2_FactoryMethodPattern;

public abstract class DocumentFactory {
    public abstract Document createDocument();
    public void createNewDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
    }
}
