"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersOrderByWithRelationInput_1 = require("../../../inputs/Newsletter_subscribersOrderByWithRelationInput");
const Newsletter_subscribersWhereInput_1 = require("../../../inputs/Newsletter_subscribersWhereInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
const Newsletter_subscribersScalarFieldEnum_1 = require("../../../../enums/Newsletter_subscribersScalarFieldEnum");
let FindManyNewsletter_subscribersArgs = class FindManyNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], FindManyNewsletter_subscribersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByWithRelationInput_1.Newsletter_subscribersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNewsletter_subscribersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], FindManyNewsletter_subscribersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNewsletter_subscribersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNewsletter_subscribersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarFieldEnum_1.Newsletter_subscribersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNewsletter_subscribersArgs.prototype, "distinct", void 0);
FindManyNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyNewsletter_subscribersArgs);
exports.FindManyNewsletter_subscribersArgs = FindManyNewsletter_subscribersArgs;
