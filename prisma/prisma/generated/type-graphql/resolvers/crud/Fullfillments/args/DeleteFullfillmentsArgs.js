"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let DeleteFullfillmentsArgs = class DeleteFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], DeleteFullfillmentsArgs.prototype, "where", void 0);
DeleteFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteFullfillmentsArgs);
exports.DeleteFullfillmentsArgs = DeleteFullfillmentsArgs;
