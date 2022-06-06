"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let FindUniqueEmail_templatesArgs = class FindUniqueEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], FindUniqueEmail_templatesArgs.prototype, "where", void 0);
FindUniqueEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmail_templatesArgs);
exports.FindUniqueEmail_templatesArgs = FindUniqueEmail_templatesArgs;
