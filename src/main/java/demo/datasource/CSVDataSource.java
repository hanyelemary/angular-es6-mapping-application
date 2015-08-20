package demo.datasource;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Component;
import java.io.File;
import java.io.FileReader;
import java.io.Reader;

/**
 * A class representing a CSV data source along with its records.
 */
@Component
public class CSVDataSource {

    public Iterable<CSVRecord> readRecords(String filePath) {
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource(filePath).getFile());
        Iterable<CSVRecord> records = null;
        try {
            Reader in = new FileReader(file);
            records = CSVFormat.DEFAULT.withHeader().parse(in);
        } catch (Exception e) {
            System.out.println("Error in reading csv!");
            e.printStackTrace();
        }
        return records;
    }
}
