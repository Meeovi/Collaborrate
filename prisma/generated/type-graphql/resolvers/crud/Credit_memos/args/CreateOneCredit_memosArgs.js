"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateInput_1 = require("../../../inputs/Credit_memosCreateInput");
let CreateOneCredit_memosArgs = class CreateOneCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateInput_1.Credit_memosCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateInput_1.Credit_memosCreateInput)
], CreateOneCredit_memosArgs.prototype, "data", void 0);
CreateOneCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCredit_memosArgs);
exports.CreateOneCredit_memosArgs = CreateOneCredit_memosArgs;
