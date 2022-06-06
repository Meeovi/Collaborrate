"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesUpdateManyMutationInput_1 = require("../../../inputs/Email_templatesUpdateManyMutationInput");
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
let UpdateManyEmail_templatesArgs = class UpdateManyEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesUpdateManyMutationInput_1.Email_templatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesUpdateManyMutationInput_1.Email_templatesUpdateManyMutationInput)
], UpdateManyEmail_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], UpdateManyEmail_templatesArgs.prototype, "where", void 0);
UpdateManyEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEmail_templatesArgs);
exports.UpdateManyEmail_templatesArgs = UpdateManyEmail_templatesArgs;
