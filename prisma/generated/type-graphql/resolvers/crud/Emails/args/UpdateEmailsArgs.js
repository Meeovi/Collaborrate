"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsUpdateInput_1 = require("../../../inputs/EmailsUpdateInput");
const EmailsWhereUniqueInput_1 = require("../../../inputs/EmailsWhereUniqueInput");
let UpdateEmailsArgs = class UpdateEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateInput_1.EmailsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsUpdateInput_1.EmailsUpdateInput)
], UpdateEmailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], UpdateEmailsArgs.prototype, "where", void 0);
UpdateEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateEmailsArgs);
exports.UpdateEmailsArgs = UpdateEmailsArgs;
