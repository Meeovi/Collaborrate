"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphAvgAggregate = class Upload_file_morphAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphAvgAggregate.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphAvgAggregate.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphAvgAggregate.prototype, "order", void 0);
Upload_file_morphAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_file_morphAvgAggregate", {
        isAbstract: true
    })
], Upload_file_morphAvgAggregate);
exports.Upload_file_morphAvgAggregate = Upload_file_morphAvgAggregate;
