"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsWhereInput_1 = require("../../../inputs/FullfillmentsWhereInput");
let DeleteManyFullfillmentsArgs = class DeleteManyFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereInput_1.FullfillmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereInput_1.FullfillmentsWhereInput)
], DeleteManyFullfillmentsArgs.prototype, "where", void 0);
DeleteManyFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFullfillmentsArgs);
exports.DeleteManyFullfillmentsArgs = DeleteManyFullfillmentsArgs;
