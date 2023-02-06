"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneReturnsArgs_1 = require("./args/CreateOneReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let CreateOneReturnsResolver = class CreateOneReturnsResolver {
    async createOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReturnsArgs_1.CreateOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneReturnsResolver.prototype, "createOneReturns", null);
CreateOneReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], CreateOneReturnsResolver);
exports.CreateOneReturnsResolver = CreateOneReturnsResolver;
