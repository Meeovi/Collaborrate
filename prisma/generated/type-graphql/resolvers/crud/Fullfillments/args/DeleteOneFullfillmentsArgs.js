"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let DeleteOneFullfillmentsArgs = class DeleteOneFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], DeleteOneFullfillmentsArgs.prototype, "where", void 0);
DeleteOneFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneFullfillmentsArgs);
exports.DeleteOneFullfillmentsArgs = DeleteOneFullfillmentsArgs;
