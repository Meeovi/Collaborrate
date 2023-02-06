"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsUpdateManyMutationInput_1 = require("../../../inputs/EmailsUpdateManyMutationInput");
const EmailsWhereInput_1 = require("../../../inputs/EmailsWhereInput");
let UpdateManyEmailsArgs = class UpdateManyEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateManyMutationInput_1.EmailsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateManyMutationInput_1.EmailsUpdateManyMutationInput)
], UpdateManyEmailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], UpdateManyEmailsArgs.prototype, "where", void 0);
UpdateManyEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEmailsArgs);
exports.UpdateManyEmailsArgs = UpdateManyEmailsArgs;
