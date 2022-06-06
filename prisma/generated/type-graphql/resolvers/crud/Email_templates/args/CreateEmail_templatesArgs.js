"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesCreateInput_1 = require("../../../inputs/Email_templatesCreateInput");
let CreateEmail_templatesArgs = class CreateEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCreateInput_1.Email_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesCreateInput_1.Email_templatesCreateInput)
], CreateEmail_templatesArgs.prototype, "data", void 0);
CreateEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateEmail_templatesArgs);
exports.CreateEmail_templatesArgs = CreateEmail_templatesArgs;
