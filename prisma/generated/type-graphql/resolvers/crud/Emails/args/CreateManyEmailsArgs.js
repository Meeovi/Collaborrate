"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateManyInput_1 = require("../../../inputs/EmailsCreateManyInput");
let CreateManyEmailsArgs = class CreateManyEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateManyInput_1.EmailsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEmailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEmailsArgs.prototype, "skipDuplicates", void 0);
CreateManyEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEmailsArgs);
exports.CreateManyEmailsArgs = CreateManyEmailsArgs;
