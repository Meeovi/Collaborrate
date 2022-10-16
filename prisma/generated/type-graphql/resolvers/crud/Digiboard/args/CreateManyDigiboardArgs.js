"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardCreateManyInput_1 = require("../../../inputs/DigiboardCreateManyInput");
let CreateManyDigiboardArgs = class CreateManyDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardCreateManyInput_1.DigiboardCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDigiboardArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDigiboardArgs.prototype, "skipDuplicates", void 0);
CreateManyDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDigiboardArgs);
exports.CreateManyDigiboardArgs = CreateManyDigiboardArgs;
