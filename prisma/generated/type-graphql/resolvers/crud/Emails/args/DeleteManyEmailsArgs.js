"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsWhereInput_1 = require("../../../inputs/EmailsWhereInput");
let DeleteManyEmailsArgs = class DeleteManyEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], DeleteManyEmailsArgs.prototype, "where", void 0);
DeleteManyEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEmailsArgs);
exports.DeleteManyEmailsArgs = DeleteManyEmailsArgs;
