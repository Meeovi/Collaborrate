"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersOrderByWithRelationInput_1 = require("../../../inputs/Newsletter_subscribersOrderByWithRelationInput");
const Newsletter_subscribersWhereInput_1 = require("../../../inputs/Newsletter_subscribersWhereInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
let AggregateNewsletter_subscribersArgs = class AggregateNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], AggregateNewsletter_subscribersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByWithRelationInput_1.Newsletter_subscribersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateNewsletter_subscribersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], AggregateNewsletter_subscribersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateNewsletter_subscribersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateNewsletter_subscribersArgs.prototype, "skip", void 0);
AggregateNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateNewsletter_subscribersArgs);
exports.AggregateNewsletter_subscribersArgs = AggregateNewsletter_subscribersArgs;
