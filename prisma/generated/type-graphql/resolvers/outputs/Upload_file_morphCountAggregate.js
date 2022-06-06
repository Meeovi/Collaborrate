"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphCountAggregate = class Upload_file_morphCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCountAggregate.prototype, "_all", void 0);
Upload_file_morphCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_file_morphCountAggregate", {
        isAbstract: true
    })
], Upload_file_morphCountAggregate);
exports.Upload_file_morphCountAggregate = Upload_file_morphCountAggregate;
