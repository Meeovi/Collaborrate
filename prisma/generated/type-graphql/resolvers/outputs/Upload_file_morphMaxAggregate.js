"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphMaxAggregate = class Upload_file_morphMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphMaxAggregate.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphMaxAggregate.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphMaxAggregate.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphMaxAggregate.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphMaxAggregate.prototype, "order", void 0);
Upload_file_morphMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_file_morphMaxAggregate", {
        isAbstract: true
    })
], Upload_file_morphMaxAggregate);
exports.Upload_file_morphMaxAggregate = Upload_file_morphMaxAggregate;
