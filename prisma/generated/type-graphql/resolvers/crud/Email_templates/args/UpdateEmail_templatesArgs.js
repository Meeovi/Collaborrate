"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesUpdateInput_1 = require("../../../inputs/Email_templatesUpdateInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let UpdateEmail_templatesArgs = class UpdateEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesUpdateInput_1.Email_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesUpdateInput_1.Email_templatesUpdateInput)
], UpdateEmail_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], UpdateEmail_templatesArgs.prototype, "where", void 0);
UpdateEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateEmail_templatesArgs);
exports.UpdateEmail_templatesArgs = UpdateEmail_templatesArgs;
