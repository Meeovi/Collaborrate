"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyReturnsArgs_1 = require("./args/CreateManyReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyReturnsResolver = class CreateManyReturnsResolver {
    async createManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReturnsArgs_1.CreateManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyReturnsResolver.prototype, "createManyReturns", null);
CreateManyReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], CreateManyReturnsResolver);
exports.CreateManyReturnsResolver = CreateManyReturnsResolver;
