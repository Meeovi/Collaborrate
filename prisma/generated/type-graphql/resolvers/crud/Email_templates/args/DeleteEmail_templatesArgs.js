"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let DeleteEmail_templatesArgs = class DeleteEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], DeleteEmail_templatesArgs.prototype, "where", void 0);
DeleteEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteEmail_templatesArgs);
exports.DeleteEmail_templatesArgs = DeleteEmail_templatesArgs;
