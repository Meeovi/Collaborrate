"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneVendorsArgs_1 = require("./args/CreateOneVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let CreateOneVendorsResolver = class CreateOneVendorsResolver {
    async createOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneVendorsArgs_1.CreateOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneVendorsResolver.prototype, "createOneVendors", null);
CreateOneVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], CreateOneVendorsResolver);
exports.CreateOneVendorsResolver = CreateOneVendorsResolver;
