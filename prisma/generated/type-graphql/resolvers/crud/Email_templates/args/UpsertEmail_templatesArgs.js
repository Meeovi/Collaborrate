"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesCreateInput_1 = require("../../../inputs/Email_templatesCreateInput");
const Email_templatesUpdateInput_1 = require("../../../inputs/Email_templatesUpdateInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let UpsertEmail_templatesArgs = class UpsertEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], UpsertEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCreateInput_1.Email_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesCreateInput_1.Email_templatesCreateInput)
], UpsertEmail_templatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesUpdateInput_1.Email_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesUpdateInput_1.Email_templatesUpdateInput)
], UpsertEmail_templatesArgs.prototype, "update", void 0);
UpsertEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertEmail_templatesArgs);
exports.UpsertEmail_templatesArgs = UpsertEmail_templatesArgs;
