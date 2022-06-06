"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByWithRelationInput_1 = require("../../../inputs/Email_templatesOrderByWithRelationInput");
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let AggregateEmail_templatesArgs = class AggregateEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], AggregateEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesOrderByWithRelationInput_1.Email_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEmail_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], AggregateEmail_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmail_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEmail_templatesArgs.prototype, "skip", void 0);
AggregateEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEmail_templatesArgs);
exports.AggregateEmail_templatesArgs = AggregateEmail_templatesArgs;
