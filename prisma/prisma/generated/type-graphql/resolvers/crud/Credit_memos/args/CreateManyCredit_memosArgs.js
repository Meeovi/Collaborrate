"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyInput_1 = require("../../../inputs/Credit_memosCreateManyInput");
let CreateManyCredit_memosArgs = class CreateManyCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateManyInput_1.Credit_memosCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCredit_memosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCredit_memosArgs.prototype, "skipDuplicates", void 0);
CreateManyCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCredit_memosArgs);
exports.CreateManyCredit_memosArgs = CreateManyCredit_memosArgs;
