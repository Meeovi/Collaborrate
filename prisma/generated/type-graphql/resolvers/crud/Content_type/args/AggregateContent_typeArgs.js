"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeOrderByWithRelationInput_1 = require("../../../inputs/Content_typeOrderByWithRelationInput");
const Content_typeWhereInput_1 = require("../../../inputs/Content_typeWhereInput");
const Content_typeWhereUniqueInput_1 = require("../../../inputs/Content_typeWhereUniqueInput");
let AggregateContent_typeArgs = class AggregateContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereInput_1.Content_typeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeWhereInput_1.Content_typeWhereInput)
], AggregateContent_typeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeOrderByWithRelationInput_1.Content_typeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateContent_typeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput)
], AggregateContent_typeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateContent_typeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateContent_typeArgs.prototype, "skip", void 0);
AggregateContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateContent_typeArgs);
exports.AggregateContent_typeArgs = AggregateContent_typeArgs;
