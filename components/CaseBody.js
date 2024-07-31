import RichText from "@/components/RichText";

const CaseBody = ({ caseStudy }) => {
  const { content } = caseStudy.fields;

  return (
    <div className="mx-auto prose">
      <RichText content={content} />
    </div>
  );
};

export default CaseBody;
