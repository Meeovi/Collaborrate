"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsCreateInput_1 = require("../../../inputs/FullfillmentsCreateInput");
let CreateFullfillmentsArgs = class CreateFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCreateInput_1.FullfillmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsCreateInput_1.FullfillmentsCreateInput)
], CreateFullfillmentsArgs.prototype, "data", void 0);
CreateFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateFullfillmentsArgs);
exports.CreateFullfillmentsArgs = CreateFullfillmentsArgs;
